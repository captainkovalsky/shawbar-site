import React from "react";

const Index = () => {
  return (
    <>
      <section className="section">
        <h1 className="title is-3">Комбо</h1>
        <div className="columns">
          <div className="column">
            <p className="title is-4">Шаврол Класичний</p>
            <figure className="image">
              <img
                src="assets/images/combo/standard.jpg"
                alt=""
                className="src"
              />
            </figure>
          </div>
          <div className="column">
            <p className="title is-4">Шаврол Супер Сир</p>
            <figure className="image">
              <img
                src="assets/images/combo/cheese.jpg"
                alt=""
                className="src"
              />
            </figure>
          </div>
          <div className="column">
            <p className="title is-4">Шаврол Креветка</p>
            <figure className="image">
              <img
                src="assets/images/combo/krevetka.jpg"
                alt=""
                className="src"
              />
            </figure>
          </div>
          <div className="column">
            <p className="title is-4">Шаврол Фалафель</p>
            <figure className="image">
              <img
                src="assets/images/combo/falafel.jpg"
                alt=""
                className="src"
              />
            </figure>
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-quarter">
            <p className="title is-4">Клаб Сендвіч</p>
            <figure className="image">
              <img
                src="assets/images/combo/kombo-sand-2.jpg"
                alt=""
                className="src"
              />
            </figure>
          </div>
          <div className="column is-one-quarter">
            <p className="title is-4">Комбо Сендвіч</p>
            <figure className="image">
              <img
                src="assets/images/combo/sand-1.jpg"
                alt=""
                className="src"
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="title is-3">Шавроли</h1>
        <div className="columns">
          <div className="column is-one-quarter">
            <p className="title is-4">Шаврол Класичний</p>
            <figure className="image">
              <img
                src="assets/images/rolls/standard.jpg"
                alt=""
                className="src"
              />
            </figure>
          </div>
          <div className="column is-one-quarter">
            <p className="title is-4">Шаврол Super Cheese</p>
            <figure className="image">
              <img
                src="assets/images/rolls/cheese.jpg"
                alt=""
                className="src"
              />
            </figure>
          </div>
          <div className="column is-one-quarter">
            <p className="title is-4">Шаврол Креветка</p>
            <figure className="image">
              <img src="assets/images/rolls/krevetka.jpg" alt="" />
            </figure>
          </div>
          <div className="column is-one-quarter">
            <p className="title is-4">Шаврол Фалафель</p>
            <figure className="image">
              <img
                src="assets/images/rolls/falafel.jpg"
                alt=""
                className="src"
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="title is-3">Снеки</h1>
        <div className="columns">
          <div className="column is-one-quarter">
            <p className="title is-4">Картопля ФРІ</p>
            <figure className="image">
              <img
                src="assets/images/snacks/fried.jpg"
                alt=""
                className="src"
              />
            </figure>
          </div>
          <div className="column is-one-quarter">
            <p className="title is-4">Сирні Кульки</p>
            <figure className="image">
              <img
                src="assets/images/snacks/cheese-fri.png"
                alt=""
                className="src"
              />
            </figure>
            <button className="button is-link">Додати</button>
          </div>
          <div className="column is-one-quarter">
            <p className="title is-4">Кесадилья</p>
            <figure className="image ">
              <img src="assets/images/kesa/kesa.jpg" alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
