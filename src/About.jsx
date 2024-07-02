
function About () {
    return(
        <>
            <section id="about" className="about section">
                <div className="container">
                    <div className="section__heading">
                        <h2 className="heading01">about<span className="heading01__subtitle">イベントについて</span></h2>
                    </div>
                    <div className="about__body">
                        <figure className="about__img-wrapper">
                            <img className="about__img" src="img/about.jpg" alt="深夜作業の様子" />
                        </figure>
                        <div className="about__desc">
                            <div className="about__subtitle">テーマ</div>
                            <h3 className="about__title">定時で帰る</h3>
                            <div className="about__info">
                                <p>
                                残業は心と体に良くないです。世界最速で定時に帰る男、ショーン・デイビット・ジュニア氏が定時で帰るためのスペシャルな技を紹介！
                                さぁ、レッツ go home now!</p>
                            </div>
                            <div className="about__table">
                                <table className="table-type01">
                                    <tbody>
                                        <tr>
                                            <th>日時</th>
                                            <td>2030年5月30日（土） 13:00-翌朝13:00</td>
                                        </tr>
                                        <tr>
                                            <th>会場</th>
                                            <td>オンライン</td>
                                        </tr>
                                        <tr>
                                            <th>定員</th>
                                            <td>3名</td>
                                        </tr>
                                        <tr>
                                            <th>参加費</th>
                                            <td>無料</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="about__btn">
                                <a href="#registor" className="btn btn--sm">お申し込み</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About