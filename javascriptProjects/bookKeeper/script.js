//Setting up globabls

const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = [];

//Show modal, focus on Input
function showModal() {
  modal.classList.add('show-modal');
  websiteNameEl.focus();
}

//Modal Event listner
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

window.addEventListener('click', (e) => {
  (e.target === modal ? modal.classList.remove('show-modal') : false);
});

// Validate Form
function validate(nameValue, urlValue) {
  const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  const regex = new RegExp(expression);

  if (!nameValue || !urlValue) {
    alert("Please enter values for both fields.");
    return false;
  }

  if (!urlValue.match(regex)) {
    alert("Please enter a valid web address.");
    return false;
  }

  // Valid
  return true;
}

//Build Bookmars Dom
function buildBookmarks() {
  bookmarks.forEach((bookmark)=>{
     const { name, url } = bookmark;
     //Itme
     const item = document.createElement('div');
     item.classList.add('item');
     //close icon
     const closeIcon = document.createElement('i');
     closeIcon.classList.add('fas', 'fa-times');
  });
}

//Fetch from Local storage
function fetchBookmarks() {
  //Get bookmarks if its available
  if (localStorage.getItem('bookmarks')) {
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  } else {
    //Create a bookmarks array in localStorage
    bookmarks = [{
      name: 'Sumit',
      url: 'https://www.cnn.com'
    }];
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  buildBookmarks();
}


//Handle Data from Form
function storeBookmark(e) {
  e.preventDefault();
  const nameValue = websiteNameEl.value;
  let urlValue = websiteUrlEl.value;
  if (!urlValue.includes('https://') && !urlValue.includes('http://')) {
    urlValue = `https://${urlValue}`;
  }
  validate(nameValue, urlValue);
  const bookmark = {
    name: nameValue,
    url: urlValue,
  };
  bookmarks.push(bookmark);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  fetchBookmarks();
  bookmarkForm.reset();
  websiteNameEl.focus();
}

//Event Listner
bookmarkForm.addEventListener('submit', storeBookmark);

//On load fetch bookmakrs
fetchBookmarks();