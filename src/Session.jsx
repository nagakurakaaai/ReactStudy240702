
function Session () {
    return(
        <>
            <section id="session" className="session section">
                <div className="container">
                    <div className="section__heading">
                        <h2 className="heading01">session<span className="heading01__subtitle">セッション</span></h2>
                    </div>
                    <div className="session__body">
                        <div className="session__schedule">
                            <table className="table-type02">
                                <tr>
                                <th className="session-table__time">13:00-<br className="sp" />14:00</th>
                                <td>
                                    <h3 className="session-table__title">ライトニングトーク：定時に帰る、それはアンドロイドになること</h3>
                                    <p>スピーカー：ショーン・デイビット・ジュニア<br/>人間らしくあろうとすること、それが残業を生むのだ。さぁ！アンドロイドになるのだ！</p>
                                </td>
                                </tr>
                                <tr>
                                <th className="session-table__time">14:00-<br className="sp" />18:00</th>
                                <td>
                                    <h3 className="session-table__title">ショーンのとっておきの定時に帰る方法</h3>
                                    <p>スピーカー：ショーン・デイビット・ジュニア<br/>アンドロイド的定時に帰る方法を紹介。ワタシ、テイジデカエリマス。</p>
                                </td>
                                </tr>
                                <tr>
                                <th className="session-table__time">18:00-<br className="sp" />24:00</th>
                                <td>
                                    <h3 className="session-table__title">公私混同仕事術</h3>
                                    <p>スピーカー：ミホコ・テニース<br/>私は会社にもテニスラケットを持ち込む。そう、もういっそのこと仕事と趣味の境界線を消しましょう。</p>
                                </td>
                                </tr>
                                <tr>
                                <th className="session-table__time">24:00-<br className="sp" />13:00</th>
                                <td>
                                    <h3 className="session-table__title">超ネット仕事術</h3>
                                    <p>スピーカー：ジェシカ・パンナコッタ<br/>７年間一度も外出せずに仕事をする方法を紹介。自宅大好きっ！</p>
                                </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Session