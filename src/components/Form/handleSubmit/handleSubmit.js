export default function handleSubmit(e, props) {
        e.preventDefault();
        let count = 0;
        document
          .querySelectorAll(".error_msg")
          .forEach((span) =>{
            window.getComputedStyle(span).display === "block" 
            ? count++ 
            : console.log(count)
             console.log( window.getComputedStyle(span).display)
             console.log(count)            
      });
    
        if (count === 0) {
          // eslint-disable-next-line no-unused-expressions
          props.function(); 
          };
        }
 
 