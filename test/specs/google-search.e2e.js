const { isExportDeclaration } = require("typescript")

describe('ebay website search', () =>{
   it("should open the main URL and verify the title",()=>{
       browser.url('https://www.ebay.ca/')
       expect(browser).toHaveTitle(
           'Electronics, Cars, Fashion, Collectibles & More | eBay'
    );
   });


it('should search for product and verify the text value',()=>{
    const searchInput = $('#gh-ac');
    const searchBtn = $('#gh-btn');

    searchInput.addValue('LapTop');
    searchBtn.click();

    expect(searchInput).toHaveValue('LapTop');
});

it('should redirect to a new page and verify the title',()=>{
    expect(browser).toHaveTitle('LapTop| eBay');
});

it('should update the serach category',()=>{
    const category=$('#gh-cat option:nth-child(1)');

    expect(category).toHaveText('PC Laptops & Netbooks')
});
});