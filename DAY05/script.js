const introText=document.querySelector("#introText");
const changeIntroBtn=document.querySelector("#changeIntroBtn");

const introList= [
	"안녕하세요. 저는 웹기초 부트캠프를 듣고 있습니다.",
	"저는 사용자에게 편한 서비스를 만드는 것에 관심이 있습니다.",
	"HTML, CSS, JavaScript를 활용해 자기소개 페이지를 만들고 있습니다.",
	"앞으로 프로젝트 경험을 쌓으며 성장하고 싶습니다.",
	"웹기초 파이팅!"
];

let currentIndex=0;

changeIntroBtn.addEventListener("click",function () {
	currentIndex=currentIndex+1;

	if (currentIndex>=introList.length) {
		currentIndex=0;
	}
	
	introText.textContent=introList[currentIndex];
});