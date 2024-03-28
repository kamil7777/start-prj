
export default function getModalWindow () {
    const wrp = document.querySelector('.wrapper');
    wrp.insertAdjacentHTML('afterbegin',
    `<div class="alert">
            <div class="alertBlock">
                <div class="wrp">
                    <span class="alertBlock-wrp-btn">Коэффициент прочности сварного шва(на растяжение)</span>
                    <button class="button button-modal">&#10006;</button>
                </div>
                <div class="grid-modal">
                    <div class="item">
                        <label for="inputTemp" class="col-form-label">Расчетная температура</label>
                    </div>
                    <div class="item">
                        <input type="number" id="inputTemp" class="input temp tempTake" placeholder="0" aria-describedby="passwordHelpInline" disabled>
                        <span id="passwordHelpInline" class="form-text"> С </span>
                    </div>
                    <div class="item">
                        <label for="inputPassword6" class="col-form-label">Технология изготовления изделия</label>
                    </div>
                    <div class="item">
                        <select  aria-label="Default select example" class="pipe pipeModule" disabled>
                            <option value="Электросварная">Электросварная</option>
                            <option value="Бесшовная">Бесшовная</option>
                        </select>
                    </div>
                    <div class="item">
                        <label for="inputPassword6" class="col-form-label">Контроль качества шва</label>
                    </div>
                    <div class="item">
                        <select  aria-label="Default select example" class="pipe weldInspection">
                            <option value="100 % контроль шва">100 % контроль шва</option>
                            <option value="контроль шва &gt; 10%">контроль шва &gt; 10%</option>
                            <option value="контроль шва &lt; 10%">контроль шва &lt; 10%</option>
                        </select>
                    </div>
                    <div class="item">
                        <label for="inputWeldInspection" class="col-form-label">Коэффициент прочности сварного шва</label>
                    </div>
                    <div class="item">
                        <input type="number" id="inputWeldInspection" class="input" placeholder="0" aria-describedby="passwordHelpInline" disabled>
                    </div>
                </div>

            </div>
    </div>`);
}
