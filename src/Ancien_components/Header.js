import React, {Componenet}  from 'react' ;
import marked from 'marked';

class Header extends Componenent {
    getMarkdownText(text){

        var rawMarkup = marked(text);
        return{__html:rawMarkup};
        
        
        }
        
        
        
            render() {
                return (
                    <div className="col-sm-6" dangerouslySetInnerHTML={this.getMarkdownText}>
                        
                    </div>
                )
            }
        }
        
        export default Header ; 







