import SessionArticle from './SessionArticle.jsx'

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
                                <tbody>
                                    <SessionArticle fromTime="13:00-" toTime="14:00" title="ライトニングトーク：定時に帰る、それはアンドロイドになること" text={<>スピーカー：ショーン・デイビット・ジュニア<br/>人間らしくあろうとすること、それが残業を生むのだ。さぁ！アンドロイドになるのだ！</>} />
                                    <SessionArticle fromTime="14:00-" toTime="18:00" title="ショーンのとっておきの定時に帰る方法" text={<>スピーカー：ショーン・デイビット・ジュニア<br/>アンドロイド的定時に帰る方法を紹介。ワタシ、テイジデカエリマス。</>} />
                                    <SessionArticle fromTime="18:00-" toTime="24:00" title="公私混同仕事術" text={<>スピーカー：ミホコ・テニース<br/>私は会社にもテニスラケットを持ち込む。そう、もういっそのこと仕事と趣味の境界線を消しましょう。</>} />
                                    <SessionArticle fromTime="24:00-" toTime="13:00" title="超ネット仕事術" text={<>スピーカー：ジェシカ・パンナコッタ<br/>７年間一度も外出せずに仕事をする方法を紹介。自宅大好きっ！</>} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Session