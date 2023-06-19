class Entry extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <style>	
            .entry{
                /* --background-color: #F5F5F5; */
                display: grid;
                border-style: solid;
                border-color: #F5F5F5;
                grid-auto-rows: auto;
                padding: 5%;
                position: relative;
                box-sizing: border-box;
                border-radius: 5px;
            }

            img{
                object-fit: cover;
                width: 12em;
                height: 7em;
                padding:0em 0em 0em 0em;
            }

            .image{
                max-width: 100%;
                object-fit: cover;
                width: 12em;
                height: 7em;
                padding:0em 0em 0em 0em;
            }

            .grid{
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(180px, 2fr));
                grid-template-rows: auto auto auto;
                grid-column-gap: 0.5em;
                grid-row-gap: 1em;
            }

            .no-picture {
                margin-top: 0.5em;
            }

            #section{
                font-size: 0.7em;
            }

            #headline{
                font-size: 0.9em;
            }

            #date{
                font-size: 0.6em;
            }

        </style>
        <div class="entry">
            <div class="image">
                <slot name="link"><slot name="imagesrc"></slot></slot>
            </div>
            <div class="text">
                <slot name="link"><slot name="headline"></slot></slot>
                <slot name="description"></slot>
                <slot name="date"></slot><br />
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('entry-component', Entry);