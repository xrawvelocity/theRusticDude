import React, { Component } from "react";

export default class FAQ extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <div className="faq">
            <Accordion />
        </div>
    );
  }
}

const data = [
  {
    title: "How do you decide how much to charge your customers?",
    paragraph: "Based on how big and complex their custom furniture is.",
  },
  {
    title: "What kind of wood do you work with?",
    paragraph: "We use soft yellow pine which we then might stain to fit the customer's liking.",
  },
  {
    title: "How will I pay for my custom furniture?",
    paragraph: "We currently only accept cash, checks, or cash app.",
  },
  {
    title: "Is your furniture fit for the outdoors?",
    paragraph: "Yes it is! We use a UV and water protecting coat on all our works.",
  },
];

class Accordion extends React.Component {
  render() {
    return (
      <div {...{ className: "wrapper" }}>
        <ul {...{ className: "accordion-list" }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: "accordion-list__item", key }}>
                <AccordionItem {...data} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  state = {
    opened: false,
  };

  render() {
    const {
      props: { paragraph, title },
      state: { opened },
    } = this;

    return (
      <div
        {...{
          className: `accordion-item, ${opened && "accordion-item--opened"}`,
          onClick: () => {
            this.setState({ opened: !opened });
          },
        }}
      >
        <div {...{ className: "accordion-item__line" }}>
          <h3 {...{ className: "accordion-item__title" }}>{title}</h3>
          <span {...{ className: "accordion-item__icon" }} />
        </div>
        <div {...{ className: "accordion-item__inner" }}>
          <div {...{ className: "accordion-item__content" }}>
            <p {...{ className: "accordion-item__paragraph" }}>{paragraph}</p>
          </div>
        </div>
      </div>
    );
  }
}
