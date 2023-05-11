document.addEventListener("DOMContentLoaded", function(){
	// password
	function passwordBtn() {
		var btn_pw = document.querySelector('.js_btn_pw'),
		input_pw = document.querySelector('.js_input_pw');

		btn_pw.onclick = function(){
			if(btn_pw.classList.contains('hide')){
				btn_pw.classList.replace('hide', 'show');
				input_pw.setAttribute('type', 'text');
			}else{
				btn_pw.classList.replace('show', 'hide');
				input_pw.setAttribute('type', 'password');
			}
		}
	}

	if(document.getElementsByClassName('js_btn_pw').length){
		passwordBtn()
	}

	// popup close
	function popClose () {
		var pop_close = document.querySelector('.js_pop_close'),
			pop_wrap = pop_close.parentNode.parentNode;

		pop_close.onclick = function(){
			pop_wrap.classList.add('unactive');
		}
	}
	if(document.getElementsByClassName('js_pop_close').length){
		popClose()
	}

	//swiper 슬라이드
	function slideUi (){
		const slide = new Swiper('.slide_wrap', {
			slidesPerView : 1,
			pagination : {
				el : '.paging',
				type : 'bullets',
				clickable : true,
			},
		})
	}
	if(document.getElementsByClassName('slide_wrap').length){
		slideUi()
	}

	// 의류 사이즈 측정 기준
	function clothesTab () {
		const tabItem = document.querySelectorAll('.js-tab li')
		const tabInner = document.querySelectorAll('.clothes_list li')

		tabItem.forEach((tab, idx)=> {
			tab.addEventListener('click', function(){
				tabInner.forEach((inner)=> {
					inner.classList.remove('on')
				})

				tabItem.forEach((item)=> {
					item.classList.remove('on')
				})

				tabItem[idx].classList.add('on')
				tabInner[idx].classList.add('on')
			})
		})
	}
	if(document.getElementsByClassName('js-tab').length){
		clothesTab()
	}
});