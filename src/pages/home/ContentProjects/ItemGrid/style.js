import styled from 'styled-components'

const Content = styled.div`
  
    background-color: white;
    width: 100%;
    height: auto;
    max-width: 300px;
    border-radius: 15px;
 
    &:hover{
        animation-name: hoverContent;
        animation-duration: 300ms;
        transition: 1s;
    };


    @keyframes hoverContent {
   
        0% {
            transform: rotate3d(0, 0, 0, 30deg);
           
        }
        50%{
            transform: translateY(-10px) rotate3d(1, 0, 1, 10deg);

        }
        75%{
            transform: translateY(-10px) rotate3d(1, 0, -1, 10deg);
        }
        100%{
            transform: rotate3d(0, 0, 0, 30deg)
        }
    }

`

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 12px;
`

export{Content, Img}