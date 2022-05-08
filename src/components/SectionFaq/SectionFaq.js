import * as React from 'react';
import Accordion from 'react-bootstrap/Accordion'

import './SectionFaq.scss';

const data = {
  title: 'FAQ',
  questions: [
    {
      title: 'Is the book free?',
      answer: 'Yes. You can read it <a href="https://themlsbook.com/read" target="_blank">here</a>.',
    },
    // {
    //   title: 'What bookstores are selling this book?',
    //   answer: 'For now, you can purchase this book in few places in Moscow, Russia: <ul><li><a href="https://themlsbook.com/read" target="_blank"><b>Big Bookstore</b></a><li><a href="https://themlsbook.com/read" target="_blank"><b>Big Bookstore</b></a><li><a href="https://themlsbook.com/read" target="_blank"><b>Big Bookstore</b></a></ul> Please, check first if the item is in stock before coming to the store.',
    // },
    {
      title: 'What does this book cover?',
      answer: 'The first part of the book details supervised learning world. We will explain most of the terms - artificial intelligence, data science, machine learning, deep learning, gradient descent, linear regression, overfitting and underfitting, bias and variance errors, basis expansion and regularization. The second part of the book is not published yet, but will cover all the known algorithms, including logit models, maximum margin models, bayesian models, ensemble models (boosting / bagging), tree-based models, and evaluation metrics.',
    },
    {
      title: 'I would like to thank the author. Could I donate?',
      answer: 'If you like to express your appreciation, you can <a href="https://www.buymeacoffee.com/5x12" target="_blank">buy me a coffee</a>.'
    },
    {
      title: 'Are there any prerequisites to reading this book?',
      answer: 'There are no strict prerequisites to reading this book. However, knowledge of mathematics (incl. derivatives and linear algebra) and inferential statistics (incl. linear/polynomial regressions, and distributions) will undoubtedly help the readers to get the most out of this book.',
    },
    {
      title: 'When could I expect the second part of the book?',
      answer: 'I plan to publish the MLS Part II in summer. You can make it quicker if you <a href="https://www.buymeacoffee.com/5x12" target="_blank">donate</a>. Your donation allows me to spend more time on the Machine Learning Simplified book by taking a few days off from my day job.',
    }
  ],
};

const SectionFaq = () => {
  return (
    <div className="section-faq">
      <h2 className="section-faq__title">{ data.title }</h2>

      <Accordion defaultActiveKey="0" flush className="accordeon">
        {data.questions.map(question => (
          <Accordion.Item
            eventKey={question.title}
            key={ question.title }
            className="question"
          >
            <Accordion.Header>
              { question.title }
            </Accordion.Header>
            <Accordion.Body>
              <p dangerouslySetInnerHTML={{__html: question.answer}} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

export default SectionFaq;
