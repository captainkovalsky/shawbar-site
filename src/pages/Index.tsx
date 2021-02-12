import React from "react";
import Modal from "../components/Modal/Modal";

const Index = () => {
  return (
    <>
      <section className="section">
        <h1 className="title is-3">Комбо</h1>
        <div className="columns">
          <div className="column">
            <p className="title is-4">Шаврол Класичний</p>
            <Modal>
              <figure className="image">
                <img
                  src="assets/images/combo/standard.jpg"
                  alt=""
                  className="src"
                />
              </figure>
            </Modal>
          </div>
          <div className="column">
            <p className="title is-4">Шаврол Супер Сир</p>
            <Modal>
              <figure className="image">
                <img
                  src="assets/images/combo/cheese.jpg"
                  alt=""
                  className="src"
                />
              </figure>
            </Modal>
          </div>
          <div className="column">
            <p className="title is-4">Шаврол Креветка</p>
            <Modal>
              <figure className="image">
                <img
                  src="assets/images/combo/krevetka.jpg"
                  alt=""
                  className="src"
                />
              </figure>
            </Modal>
          </div>
          <div className="column">
            <p className="title is-4">Шаврол Фалафель</p>
            <Modal>
              <figure className="image">
                <img
                  src="assets/images/combo/falafel.jpg"
                  alt=""
                  className="src"
                />
              </figure>
            </Modal>
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-quarter">
            <p className="title is-4">Клаб Сендвіч</p>
            <Modal>
              <figure className="image">
                <img
                  src="assets/images/combo/kombo-sand-2.jpg"
                  alt=""
                  className="src"
                />
              </figure>
            </Modal>
          </div>
          <div className="column is-one-quarter">
            <p className="title is-4">Комбо Сендвіч</p>
            <Modal>
              <figure className="image">
                <img
                  src="assets/images/combo/sand-1.jpg"
                  alt=""
                  className="src"
                />
              </figure>
            </Modal>
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="title is-3">Шавроли</h1>
        <div className="columns">
          <div className="column is-one-quarter">
            <p className="title is-4">Шаврол Класичний</p>
            <Modal>
              <figure className="image">
                <img
                  src="assets/images/rolls/standard.jpg"
                  alt=""
                  className="src"
                />
              </figure>
            </Modal>
          </div>
          <div className="column is-one-quarter">
            <p className="title is-4">Шаврол Super Cheese</p>
            <Modal>
              <figure className="image">
                <img
                  src="assets/images/rolls/cheese.jpg"
                  alt=""
                  className="src"
                />
              </figure>
            </Modal>
          </div>
          <div className="column is-one-quarter">
            <p className="title is-4">Шаврол Креветка</p>
            <Modal>
              <figure className="image">
                <img src="assets/images/rolls/krevetka.jpg" alt="" />
              </figure>
            </Modal>
          </div>
          <div className="column is-one-quarter">
            <p className="title is-4">Шаврол Фалафель</p>
            <Modal>
              <figure className="image">
                <img
                  src="assets/images/rolls/falafel.jpg"
                  alt=""
                  className="src"
                />
              </figure>
            </Modal>
          </div>
        </div>
      </section>
      <section className="section">
        <h1 className="title is-3">Снеки</h1>
        <div className="columns">
          <div className="column is-one-quarter">
            <p className="title is-4">Картопля ФРІ</p>
            <Modal>
              <figure className="image">
                <img
                  src="assets/images/snacks/fried.jpg"
                  alt=""
                  className="src"
                />
              </figure>
            </Modal>
          </div>
          <div className="column is-one-quarter">
            <p className="title is-4">Сирні Кульки</p>
            <Modal>
              <figure className="image">
                <img
                  src="assets/images/snacks/cheese-fri.png"
                  alt=""
                  className="src"
                />
              </figure>
            </Modal>
          </div>
          <div className="column is-one-quarter">
            <p className="title is-4">Кесадилья</p>
            <Modal>
              <figure className="image ">
                <img src="assets/images/kesa/kesa.jpg" alt="" />
              </figure>
            </Modal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
