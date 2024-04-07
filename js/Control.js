// JavaScript Document
$('#fb').owlCarousel({ // #ID name you named in the HTML file
loop:true,	// cho lap lại
items:1, // xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh milisecond 1000 = 1s
	autoplay:true,		// cho phép tự động chạy
	autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:false,// cho xuất hiện bộ nút tới lui true=visible, false=invisible
dots: false	// cho xuất hiện bộ nút tới lui true=visible, false=invisible
})
