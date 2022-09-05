// ==UserScript==
// @name         Toggle tokopedia ads in search
// @namespace    https://github.com/zokovi
// @version      1.1
// @description  Add checkbox to toggle ads in search page. Useful when searching for used good a.k.a barang bekas. Because the ads sometimes are not relevant to the search term, so it's annoying. 
// @author       https://github.com/zokovi
// @match        https://www.tokopedia.com/search?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tokopedia.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    const addthis = `<div>
        <input type="checkbox" id="removeAds" aria-checked="false" autocomplete="off" class="css-16s5os-unf-checkbox__area" value="Remove Ads" name="removeAds">
        <label class="css-1v08vow"><span class="css-iaqlny">Remove Ads</span></label>
    </div>`

    const div = document.createElement('div');
    document.querySelector('div[data-ssr="resultHeaderSRPSSR"]').insertBefore(div, document.querySelector('div.css-16hrxnz'));
    div.innerHTML = addthis;
    const input = document.querySelector('input#removeAds');

    input.addEventListener('change', removeAds);


    function removeAds(){
        if (!this.attributes.checked) {
            this.setAttribute('checked', 'checked');
            [...document.querySelectorAll('.css-12sieg3')].filter(x => x.querySelector('.css-1gohnec')).map(x => {x.style = 'display: none'});
        } else {
            this.removeAttribute('checked');
            [...document.querySelectorAll('.css-12sieg3')].filter(x => x.querySelector('.css-1gohnec')).map(x => {x.style.display = ''});
        }
    }

})();
