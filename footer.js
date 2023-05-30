class theFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
            <div class="social-bar">
                <ul>
                    <li>
                    <a href="mailto:hello@barryjb.digital" class="email-icon">
                        <img src="img/email.png" target="_blank" title="send email" alt="email">
                    </a>
                    </li>
                    <li>
                        <a href="https://facebook.com">
                            <img src="img/facebook.png" target="blank" title="facebook" alt="facebook">
                        </a>
                    </li>
                    <!-- <li>
                        <a href="https://instagram.com">
                            <img src="img/instagram.png" target="blank" alt="instagram">
                        </a>
                    </li> -->
                    <!-- <li>
                        <a href="https://youtube.com">
                            <img src="img/youtube.png" target="blank" alt="youtube">
                        </a>
                    </li> -->
                    <!-- <li>
                        <a href="https://twitter.com">
                            <img src="img/twitter.png" target="blank" alt="twitter">
                        </a>
                    </li> -->
                    <!-- <li>
                        <a href="https://github.com">
                            <img src="img/github.png" target="blank" alt="github">
                        </a>
                    </li> -->
                    <!-- <li>
                        <a href="https://linkedin.com">
                            <img src="img/linkedin.png" target="blank" alt="linkedin">
                        </a>
                    </li> -->
                </ul>
            </div>

            <p>&copy; agency.digital</p>
            <script>
                let year = new Date();
                document.getElementsByTagName('footer').innerHTML = year;
            </script> */
        </header>
        `
    }
}

customElements.define('the-footer', theFooter)


        
        
