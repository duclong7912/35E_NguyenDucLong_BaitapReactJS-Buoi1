import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div>
        <section className='item'>
            <div className="item__container container px-lg-5">
                <div className="item__wrapper row">
                    <div className="col-6 mb-5 pr-4">
                        <div className="item__card">
                            <div className="item__content">
                                <div className="item__icon">
                                    <i class="fa-solid fa-tv"></i>
                                </div>
                                <h2>Fresh new layout</h2>
                                <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mb-5 pl-4">
                        <div className="item__card">
                            <div className="item__content">
                                <div className="item__icon">
                                    <i class="fa-solid fa-cloud-arrow-down"></i>
                                </div>
                                <h2>Free to download</h2>
                                <p className='mb-0'>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mb-5 pr-4">
                        <div className="item__card">
                            <div className="item__content">
                                <div className="item__icon">
                                    <i class="fa-solid fa-money-check"></i>
                                </div>
                                <h2>Jumbotron hero header</h2>
                                <p className='mb-0'>The heroic part of this template is the jumbotron hero header!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mb-5 pl-4">
                        <div className="item__card">
                            <div className="item__content">
                                <div className="item__icon">
                                    <i class="fa-brands fa-bootstrap"></i>
                                </div>
                                <h2>Feature boxes</h2>
                                <p className='mb-0'>We've created some custom feature boxes using Bootstrap icons!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mb-5 pr-4">
                        <div className="item__card">
                            <div className="item__content">
                                <div className="item__icon">
                                    <i class="fa-solid fa-code"></i>
                                </div>
                                <h2>Simple clean code</h2>
                                <p className='mb-0'>We keep our dependencies up to date and squash bugs as they come!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mb-5 pl-4">
                        <div className="item__card">
                            <div className="item__content">
                                <div className="item__icon">
                                    <i class="fa-regular fa-circle-check"></i>
                                </div>
                                <h2>A name you trust</h2>
                                <p className='mb-0'>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
      </div>
    )
  }
}
