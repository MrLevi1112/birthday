const { useState, useEffect } = React;
const e = React.createElement;

function BirthdayApp() {
    const [showMessage, setShowMessage] = useState(false);
    const [balloonAnimation, setBalloonAnimation] = useState(false);
    const [confettiActive, setConfettiActive] = useState(false);

    useEffect(() => {
        // Start animations with delays for a magical effect
        setTimeout(() => setShowMessage(true), 500);
        setTimeout(() => setBalloonAnimation(true), 1000);
        setTimeout(() => setConfettiActive(true), 1500);
    }, []);

    const handleCelebrate = () => {
        // Force reset confetti state
        setConfettiActive(false);
        
        // Use requestAnimationFrame to ensure state update happens
        requestAnimationFrame(() => {
            setConfettiActive(true);
            
            // Auto-stop confetti after 5 seconds
            setTimeout(() => {
                setConfettiActive(false);
            }, 5000);
        });
    };

    return e('div', { className: 'birthday-container' },
        // Confetti elements
        e('div', { className: confettiActive ? 'confetti active' : 'confetti' },
            ...Array.from({ length: 80 }, (_, i) => 
                e('div', { 
                    key: i, 
                    className: 'confetti-piece',
                    style: {
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${3 + Math.random() * 2}s`,
                        backgroundColor: ['#ff6b9d', '#c44569', '#f8b500', '#7bed9f', '#70a1ff', '#ff4757', '#ffeaa7'][Math.floor(Math.random() * 7)]
                    }
                })
            )
        ),
        
        // Hearts floating background
        e('div', { className: 'hearts-background' },
            ...Array.from({ length: 20 }, (_, i) => 
                e('div', { 
                    key: i, 
                    className: 'heart',
                    style: {
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        fontSize: `${Math.random() * 20 + 10}px`
                    }
                }, '💖')
            )
        ),

        // Main content
        e('div', { className: 'main-content' },
            e('h1', { 
                className: showMessage ? 'birthday-title show' : 'birthday-title' 
            }, '🎉 Happy Birthday Beautiful! 🎂'),
            
            e('div', { className: 'birthday-message' },
                e('p', { className: 'message-text' }, 
                    'Today is all about celebrating the amazing person you are! ✨'
                ),
                e('p', { className: 'message-text' }, 
                    'Hope your special day is filled with love, laughter, and all your favorite things! 💕'
                )
            ),

            // Photo Gallery Section
            e('div', { className: 'photo-gallery' },
                e('h2', { className: 'section-title' }, '📸 Our Beautiful Memories 💕'),
                e('div', { className: 'photos-grid' },
                    e('div', { className: 'photo-slot' },
                        e('img', { 
                            src: 'photo1.jpg',
                            alt: 'Beautiful Memory 1',
                            style: { 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                borderRadius: '15px'
                            }
                        })
                    ),
                    e('div', { className: 'photo-slot' },
                        e('img', { 
                            src: 'photo2.jpg',
                            alt: 'Beautiful Memory 2',
                            style: { 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                borderRadius: '15px'
                            }
                        })
                    ),
                    e('div', { className: 'photo-slot' },
                        e('img', { 
                            src: 'photo3.jpg',
                            alt: 'Beautiful Memory 3',
                            style: { 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                borderRadius: '15px'
                            }
                        })
                    ),
                    e('div', { className: 'photo-slot' },
                        e('img', { 
                            src: 'photo4.jpg',
                            alt: 'Beautiful Memory 4',
                            style: { 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                borderRadius: '15px'
                            }
                        })
                    ),
                    e('div', { className: 'photo-slot' },
                        e('img', { 
                            src: 'photo5.jpg',
                            alt: 'Beautiful Memory 5',
                            style: { 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                borderRadius: '15px'
                            }
                        })
                    ),
                    e('div', { className: 'photo-slot' },
                        e('img', { 
                            src: 'photo6.jpg',
                            alt: 'Beautiful Memory 6',
                            style: { 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                borderRadius: '15px'
                            }
                        })
                    ),
                    e('div', { className: 'photo-slot' },
                        e('img', { 
                            src: 'photo7.jpg',
                            alt: 'Beautiful Memory 7',
                            style: { 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                borderRadius: '15px'
                            }
                        })
                    ),
                    e('div', { className: 'photo-slot' },
                        e('img', { 
                            src: 'photo8.jpg',
                            alt: 'Beautiful Memory 8',
                            style: { 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                borderRadius: '15px'
                            }
                        })
                    ),
                    e('div', { className: 'photo-slot' },
                        e('img', { 
                            src: 'photo9.jpg',
                            alt: 'Beautiful Memory 9',
                            style: { 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                borderRadius: '15px'
                            }
                        })
                    )
                )
            ),

            // Love Letter Section
            e('div', { className: 'letter-section' },
                e('h2', { className: 'section-title' }, '💌 A Special Letter For You 💌'),
                e('div', { className: 'letter-container' },
                    e('div', { className: 'letter-content' },
                        e('p', { className: 'letter-greeting' }, ',סוויטי שילי'),
                        e('div', { className: 'letter-text' },
                            e('p', null, '❤️יום הולדת 19 שמח אהובה שלי 💕'),
                            e('p', null, 'את כבר לא בת 18, אבל אל דאגה – אני עדיין נותן לך להתפנק'),
                            e('p', null, ' מאחל לך שנה מלאה בחיוכים, אהבה וחלומות שמתגשמים. תמשיכי להיות האור שלי, וויטי שלי, והבחורה הכי מדהימה בעולם. 💖🌟'),
                            e('p', null, ',ולבסוף חשבת זה יהיה רק האתר הזה... לא ולא'),
                            e('p', null, 'אני מכין לך משהו יותר גדול ויפה'),
                            e('p', null, 'תהיי מוכנה בתאריך 4.10 בשעה 18:00 פרטים בהמשך'),
                            e('p', null, 'אני אוהב אותך עד השמיים ובחזרה! 🌈🚀')
                        ),
                        e('p', { className: 'letter-signature' }, 'With all my love,\nYour devoted admirer 💕')
                    )
                )
            ),

            // Interactive balloons
            e('div', { className: balloonAnimation ? 'balloons-container animated' : 'balloons-container' },
                e('div', { className: 'balloon pink', onClick: handleCelebrate }),
                e('div', { className: 'balloon purple', onClick: handleCelebrate }),
                e('div', { className: 'balloon yellow', onClick: handleCelebrate }),
                e('div', { className: 'balloon blue', onClick: handleCelebrate }),
                e('div', { className: 'balloon red', onClick: handleCelebrate })
            ),

            // Birthday cake
            e('div', { className: 'cake-container' },
                e('div', { className: 'cake' },
                    e('div', { className: 'cake-top' }),
                    e('div', { className: 'cake-middle' }),
                    e('div', { className: 'cake-bottom' }),
                    e('div', { className: 'candle' }),
                    e('div', { className: 'flame' })
                )
            ),

            // Celebrate button
            e('button', { 
                className: 'celebrate-btn',
                onClick: handleCelebrate 
            }, '🎊 Celebrate! 🎊')
        )
    );
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(e(BirthdayApp));