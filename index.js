

const goodbye = (authorName) => {
const closingParagraph = document.querySelector('.email__closing');
closingParagraph.textContent = `S pozdravem ${authorName}`
}

goodbye('Pavel Ovesný');
