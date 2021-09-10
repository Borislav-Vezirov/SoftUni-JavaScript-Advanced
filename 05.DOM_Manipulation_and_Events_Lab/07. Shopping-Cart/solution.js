function solve() {

   let addButtons = Array.from(document.querySelectorAll('.add-product'));
   let textArea = document.querySelector('textarea');
   let checkoutButton = document.querySelector('.checkout')

   let sum = 0;
   let uniqueNames = []

   for (const addButton of addButtons) {
      addButton.addEventListener('click', (e) => {
         let currentProduct = e.currentTarget.parentElement.parentElement;
         let productName    = currentProduct.querySelector('.product-title').textContent;
         let productPrice   = Number(currentProduct.querySelector('.product-line-price').textContent).toFixed(2);
         sum += Number(productPrice);
         uniqueNames.push(productName);

         textArea.textContent += `Added ${productName} for ${productPrice} to the cart.\n`
      })
   }

   checkoutButton.addEventListener('click', () => {
      let arr = uniqueNames.reduce((acc, el) => {
         if (!acc.includes(el)) {
            acc.push(el)
         }
         return acc
      }, []);
      textArea.textContent += `You bought ${arr.join(', ')} for ${sum.toFixed(2)}.`
      addButtons.map(x => x.disabled = true);
      checkoutButton.disabled = true;
   })
}