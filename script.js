function aiReply(){
            const q = document.getElementById("question").value.toLowerCase();
            let reply = "I'm still learning 😄";

                if(q.includes("skill")) reply = "I specialize in HTML, CSS and frontend UI.";
                if(q.includes("project")) reply = "I have built Travel and Food frontend projects.";
                if(q.includes("goal")) reply = "To become a frontend developer who can combine technology + creativity, and build intelligent, modern, and highly engaging web interfaces."
                if(q.includes("hello")) reply ="Hello! I'm your portfolio assistant 🤖"

            document.getElementById("answer").innerText = reply;
            }

            document.getElementById("question").addEventListener("keydown", function(e){
                if(e.key === "Enter"){
                    e.preventDefault();   // new line prevent
                    aiReply();            // same function call
                }
            });
            document.addEventListener('DOMContentLoaded', function() {
                const navToggle = document.getElementById('nav-toggle');
                const navMenu = document.getElementById('nav-menu');
                
                if (navToggle && navMenu) {
                    navToggle.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        // Toggle active class on both elements
                        navToggle.classList.toggle('active');
                        navMenu.classList.toggle('active');
                    });
                    
                    // Close menu when clicking outside (optional)
                    document.addEventListener('click', function(e) {
                        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                            navToggle.classList.remove('active');
                            navMenu.classList.remove('active');
                        }
                    });
                }
            });

