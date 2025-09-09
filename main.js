document.addEventListener('DOMContentLoaded', function() {
    
    function updateDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = now.toLocaleDateString('ko-KR', options);
        const dayStr = now.toLocaleDateString('ko-KR', { weekday: 'long' });
        
        document.getElementById('current-date').textContent = dateStr;
        document.getElementById('current-day').textContent = dayStr;
    }

    function updateTime() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('ko-KR', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        const period = now.getHours() >= 12 ? '오후' : '오전';
        
        document.getElementById('current-time').textContent = timeStr;
        document.getElementById('time-period').textContent = period;
    }

    function updateWeather() {
        const weatherData = [
            { temp: 22, desc: '맑음' },
            { temp: 18, desc: '구름많음' },
            { temp: 15, desc: '흐림' },
            { temp: 25, desc: '맑음' }
        ];
        
        const randomWeather = weatherData[Math.floor(Math.random() * weatherData.length)];
        
        document.getElementById('weather-temp').textContent = `${randomWeather.temp}°C`;
        document.getElementById('weather-desc').textContent = randomWeather.desc;
    }

    // Navigation hover effects
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // CTA Button click effect
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            alert('회원가입 페이지로 이동합니다!');
        });
    }

    // 회원가입 모달 기능
    function initSignupModal() {
        const modal = document.getElementById('signup-modal');
        const signupBtn = document.getElementById('signup');
        const closeBtn = document.querySelector('.close');
        const cancelBtn = document.getElementById('cancel-signup');
        const confirmBtn = document.getElementById('confirm-signup');

        // 모달 열기
        if (signupBtn) {
            signupBtn.addEventListener('click', function(e) {
                e.preventDefault();
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        }

        // 모달 닫기 함수
        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.getElementById('signup-form').reset();
        }

        // X 버튼으로 닫기
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        // 취소 버튼으로 닫기
        if (cancelBtn) {
            cancelBtn.addEventListener('click', closeModal);
        }

        // 배경 클릭으로 닫기
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // 가입하기 버튼
        if (confirmBtn) {
            confirmBtn.addEventListener('click', function() {
                const form = document.getElementById('signup-form');
                const formData = new FormData(form);
                
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const password = formData.get('password');
                const confirmPassword = formData.get('confirmPassword');

                if (!name || !email || !phone || !password || !confirmPassword) {
                    alert('모든 필드를 입력해주세요.');
                    return;
                }

                if (password !== confirmPassword) {
                    alert('비밀번호가 일치하지 않습니다.');
                    return;
                }

                alert(`${name}님, UNIVERSE 가입을 환영합니다!`);
                closeModal();
            });
        }
    }

    // 나머지 기능들...
    document.querySelectorAll('.notice-list li').forEach(item => {
        item.addEventListener('click', function() {
            const noticeText = this.textContent.replace(/\d{4}\.\d{2}\.\d{2}/, '').trim();
            alert(`공지사항: ${noticeText}`);
        });
    });

    document.querySelectorAll('.facility-list li').forEach(item => {
        item.addEventListener('click', function() {
            alert(`${this.textContent} 시설 안내 페이지로 이동합니다.`);
        });
    });

    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert(`${this.textContent} 페이지로 이동합니다.`);
        });
    });

    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .api-card');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    document.querySelectorAll('.feature-card, .api-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    document.querySelectorAll('.api-card').forEach(card => {
        card.addEventListener('click', function() {
            const cardType = this.querySelector('h3').textContent;
            alert(`${cardType} 상세 정보를 확인합니다.`);
        });
    });

    // 초기화
    updateDate();
    updateTime();
    updateWeather();
    initSignupModal(); // 모달 초기화 호출


    // 로그인 모달 기능 추가 (initSignupModal 함수 아래에)
function initLoginModal() {
    const modal = document.getElementById('login-modal');
    const loginBtn = document.getElementById('login');
    const closeBtn = document.querySelector('.close-login');
    const cancelBtn = document.getElementById('cancel-login');
    const confirmBtn = document.getElementById('confirm-login');

    // 모달 열기
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // 모달 닫기 함수
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.getElementById('login-form').reset();
    }

    // X 버튼으로 닫기
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // 취소 버튼으로 닫기
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeModal);
    }

    // 배경 클릭으로 닫기
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 로그인 버튼
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            const form = document.getElementById('login-form');
            const formData = new FormData(form);
            
            const loginId = formData.get('loginId');
            const loginPassword = formData.get('loginPassword');

            if (!loginId || !loginPassword) {
                alert('아이디와 비밀번호를 모두 입력해주세요.');
                return;
            }

            // 간단한 더미 로그인 체크
            if (loginId === 'test@universe.com' && loginPassword === '1234') {
                alert('로그인 성공! 환영합니다.');
                closeModal();
            } else {
                alert('아이디 또는 비밀번호가 올바르지 않습니다.');
            }
        });
    }
}

// 그리고 DOMContentLoaded 안에서 초기화 호출
initSignupModal();
initLoginModal(); // 이 줄 추가

    
    
    setInterval(updateTime, 1000);
    setInterval(updateWeather, 300000);
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    console.log('UNIVERSE Sports Center Website Loaded Successfully!');
});