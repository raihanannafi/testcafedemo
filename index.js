import { Selector, t } from 'testcafe';
import HomePage from './Models/home'; // import the model
import PostsPage from './Models/post'; // import the model
import AddPage from './Models/add';
import ToastPage from './Models/toast';
import ArticlePage from './Models/article';
const homePage = new HomePage(); // instantiation
const postsPage = new PostsPage(); // instantiation
const addPage = new AddPage(); // instantiation
const toastPage = new ToastPage(); // instantiation
const articlePage = new ArticlePage();


fixture `Navigation`.page `xke-introduction-testcafe.surge.sh`;

test('Access to an article from the home page', async t => {
  await t.click(homePage.startBtn);
  await postsPage.isPageDisplayed();
  
  const text = await postsPage.clickFirstLink();
  
  await t
    .expect(await articlePage.title.innerText)
    .eql(text);
  });

fixture `Navigation`.page `xke-introduction-testcafe.surge.sh`;  

test('Access to the form and posting an article, coming from home', async t => {
  await t.click(homePage.startBtn);
  await postsPage.isPageDisplayed();
  
  await t.click(await postsPage.addBtn);
  await addPage.isPageDisplayed();
  
  await addPage.submitForm('How TestCafe is awesome!', 'Bla Bli Blou');
  // await toastPage.isToastDisplayed();
  });