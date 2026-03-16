import { Button } from '@alfalab/core-components/button/cssm';
import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';

import { useEffect, useState } from 'react';
import { useStocksData } from './hooks/useStocksData';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

type PredictionOption = 'yes' | 'no';

export const App = () => {
  const [selectedOption, setSelectedOption] = useState<PredictionOption | null>(null);
  const { stocks } = useStocksData();

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  useEffect(() => {
    if (stocks?.question) {
      window.gtag('event', '7287_question_impression', { var: 'var7', question: stocks.id });
    }
  }, [stocks]);

  if (selectedOption === 'no') {
    return (
      <div className={appSt.container}>
        <Typography.TitleResponsive
          tag="h1"
          view="medium"
          font="system"
          weight="semibold"
          color="primary"
          style={{
            marginTop: '1rem',
          }}
        >
          Рекомендованные бумаги
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">{stocks?.no.description}</Typography.Text>

        {stocks?.no.data.map(stock => {
          return (
            <PureCell
              onClick={() => {
                window.gtag('event', '7287_choose_security', {
                  var: 'var7',
                  security_ticker: stock.ticker,
                  answer: 'no',
                  question: stocks?.id ?? '',
                });
                window.location.replace(stock.link);
              }}
            >
              <PureCell.Graphics verticalAlign="center" key={stock.ticker}>
                <img src={stock.img} width={48} height={48} alt={stock.ticker} />
              </PureCell.Graphics>
              <PureCell.Content>
                <PureCell.Main>
                  <Typography.Text view="primary-medium">{stock.name}</Typography.Text>

                  <Typography.Text view="primary-small" color="secondary">
                    {stock.ticker}
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
              <PureCell.Addon verticalAlign="top">
                <Typography.Text view="primary-medium" weight="medium">
                  {(stock.price * stock.nominal).toLocaleString('ru-RU')}&nbsp;{stock.currency || '₽'}
                </Typography.Text>
              </PureCell.Addon>
            </PureCell>
          );
        })}

        <Typography.Text view="primary-small" color="secondary">
          Не является индивидуальной инвестиционной рекомендацией
        </Typography.Text>
      </div>
    );
  }
  if (selectedOption === 'yes') {
    return (
      <div className={appSt.container}>
        <Typography.TitleResponsive
          tag="h1"
          view="medium"
          font="system"
          weight="semibold"
          color="primary"
          style={{
            marginTop: '1rem',
          }}
        >
          Рекомендованные бумаги
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">{stocks?.yes.description}</Typography.Text>

        {stocks?.yes.data.map(stock => {
          return (
            <PureCell
              onClick={() => {
                window.gtag('event', '7287_choose_security', {
                  var: 'var7',
                  security_ticker: stock.ticker,
                  answer: 'yes',
                  question: stocks?.id ?? '',
                });
                window.location.replace(stock.link);
              }}
            >
              <PureCell.Graphics verticalAlign="center" key={stock.ticker}>
                <img src={stock.img} width={48} height={48} alt={stock.ticker} />
              </PureCell.Graphics>
              <PureCell.Content>
                <PureCell.Main>
                  <Typography.Text view="primary-medium">{stock.name}</Typography.Text>

                  <Typography.Text view="primary-small" color="secondary">
                    {stock.ticker}
                  </Typography.Text>
                </PureCell.Main>
              </PureCell.Content>
              <PureCell.Addon verticalAlign="top">
                <Typography.Text view="primary-medium" weight="medium">
                  {(stock.price * stock.nominal).toLocaleString('ru-RU')}&nbsp;{stock.currency || '₽'}
                </Typography.Text>
              </PureCell.Addon>
            </PureCell>
          );
        })}

        <Typography.Text view="primary-small" color="secondary">
          Не является индивидуальной инвестиционной рекомендацией
        </Typography.Text>
      </div>
    );
  }

  return (
    <>
      <div className={appSt.page}>
        <section className={appSt.questionScreen}>
          <Typography.TitleResponsive
            tag="h1"
            view="xlarge"
            font="system"
            weight="semibold"
            color="primary"
            style={{
              textAlign: 'center',
            }}
          >
            {stocks?.question}
          </Typography.TitleResponsive>
        </section>
      </div>
      <div className={appSt.bottomBtn}>
        <div className={appSt.answerRow}>
          <Button
            block
            view="secondary"
            className={`${appSt.answerButton} ${appSt.answerButtonNo}`}
            onClick={() => {
              window.gtag('event', '7287_answer_click', { var: 'var7', answer: 'no', question: stocks?.id ?? '' });
              setSelectedOption('no');
            }}
          >
            Нет
          </Button>

          <Button
            block
            view="secondary"
            className={`${appSt.answerButton} ${appSt.answerButtonYes}`}
            onClick={() => {
              window.gtag('event', '7287_answer_click', { var: 'var7', answer: 'yes', question: stocks?.id ?? '' });
              setSelectedOption('yes');
            }}
          >
            Да
          </Button>
        </div>
      </div>
    </>
  );
};
