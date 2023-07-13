if(window.innerWidth < 450)  {
    window.scrollTo({ top: 0, behavior: 'smooth' });
} 

const characters = document.querySelectorAll('.character')

characters.forEach((character) => {
    character.addEventListener('mouseenter',() =>{

        const characterSelect = document.querySelector('.select');
        characterSelect.classList.remove('select');
        character.classList.add('select');


        const imgCharacterPng = document.querySelector('.character_png');
        const idcharacter = character.attributes.id.value;
        imgCharacterPng.src= `./src/img/card-${idcharacter}.png`;

        const nameCharacter = document.getElementById('character_name');
        nameCharacter.innerText = character.getAttribute('data-name');

        const descriptionCharacter = document.getElementById('character_description');
        descriptionCharacter.innerText = character.getAttribute('data-description');
    }

    )
}

)
