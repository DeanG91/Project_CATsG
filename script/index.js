const cardsContainer = document.querySelector('.cards');
const btnOpenPopupForm = document.querySelector('#add');
const btnOpenPopupLogin = document.querySelector('#login');

const formCatAdd = document.querySelector('#popup-form-cat');
// const formCatAdd = document.querySelector('#popup-form-cat');

const popupAddCat = new Popup('popup-add-cats');
popupAddCat.setEventListener();
formCatAdd.addEventListener('submit', handleFormAddCat);
btnOpenPopupForm.addEventListener('click', () => popupAddCat.open());

const popupLogin = new Popup('popup-login');
popupLogin.setEventListener();
btnOpenPopupLogin.addEventListener('click', () => popupLogin.open());


function serializeForm(elements){
    const formData = {};

    elements.forEach( input => {
        if(input.type === 'submit') return;

        if(input.type !== 'checkbox') {
            formData[input.name] = input.value;
        };

        if(input.type === 'checkbox') {
            formData[input.name] = input.checked;
        };

    })

   return formData;
}

function handleFormAddCat(e){
    e.preventDefault();
    const elementsFormCat = [...formCatAdd.elements];
    const dataFromForm = serializeForm(elementsFormCat)

    console.log(dataFromForm);
    //собрать данные из формы
    //создать карточку из данных
    //добавить карточку на страницу

    const cardInstance = new Card(dataFromForm, '#card-template');
    const newCardElement = cardInstance.getElement();
    cardsContainer.append(newCardElement);

    popupAddCat.close();
}


cats.forEach(function(catData){
    const cardInstance = new Card(catData, '#card-template');
    const newCardElement = cardInstance.getElement();
    cardsContainer.append(newCardElement);
})

