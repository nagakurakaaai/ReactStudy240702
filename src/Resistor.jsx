import { useState } from "react";

function Resistor () {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [question, setQuestion] = useState("")

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangeNumber = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handleChangeQuestion = (e) => {
        setQuestion(e.target.value)
    }

    return(
        <>
            <section id="registor" className="registor section">
                <div className="container">
                    <div className="section__heading">
                        <h2 className="heading01">registor<span className="heading01__subtitle">お申し込み</span></h2>
                    </div>
                    <div className="registor__body">
                        <div className="registor__form">

                            <form className="form">

                                <div className="form__item">
                                    <div className="form__title">ご職業<span className="form__require">*必須</span></div>
                                    <span className="form__radio">
                                        <input type="radio" id="type01" name="type" value="会社員" defaultChecked /><label
                                        htmlFor="type01">会社員</label></span>
                                    <span className="form__radio"><input type="radio" id="type02" name="type" value="個人事業主" /><label
                                        htmlFor="type02">個人事業主</label></span>
                                    <span className="form__radio"><input type="radio" id="type03" name="type" value="求職中" /><label
                                        htmlFor="type03">求職中</label></span>
                                    <span className="form__radio"><input type="radio" id="type04" name="type" value="その他" /><label
                                        htmlFor="type04">その他</label></span>
                                </div>

                                <div className="form__item">
                                    <label htmlFor="name" className="form__title">お名前<span className="form__require">*必須</span></label>
                                    <input type="text" id="name" value={name} required className="form__input" onChange={handleChangeName} />
                                </div>

                                <div className="form__item">
                                    <label htmlFor="email" className="form__title">メールアドレス<span className="form__require">*必須</span></label>
                                    <input type="email" id="email" value={email} required className="form__input" onChange={handleChangeEmail} />
                                </div>

                                <div className="form__item">
                                    <label htmlFor="tel" className="form__title">電話番号<span className="form__note">（半角数字ハイフンなし）</span></label>
                                    <input type="tel" id="tel" value={phoneNumber} className="form__input" onChange={handleChangeNumber} />
                                </div>

                                <div className="form__item">
                                    <label htmlFor="comment" className="form__title">スピーカーに質問したいこと</label>
                                    <textarea id="comment" value={question} placeholder="ご自由にお書きください" className="form__textarea" onChange={handleChangeQuestion}></textarea>
                                </div>

                                <div className="form__item">
                                    <label htmlFor="job" className="form__title">WDCをどちらでお知りになりましたか？<span className="form__require">*必須</span></label>
                                    <select id="job" name="job" required className="form__select">
                                        <option value="">選択してください</option>
                                        <option value="Google/Yahoo検索">Google/Yahoo検索</option>
                                        <option value="SNS">SNS</option>
                                        <option value="ブログ">ブログ</option>
                                        <option value="友人や知人">友人や知人</option>
                                        <option value="その他">その他</option>
                                    </select>
                                </div>

                                <div className="form__btn">
                                    <button type="submit" className="btn">送信する</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resistor