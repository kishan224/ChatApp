import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';


const ChatsPage = (props)=>{
    const chatProps = useMultiChatLogic(
    '10304574-f418-4441-a32a-4f2444f4e323',
    props.user.username, props.user.secret);
    
    return (
    <div style={{height:'100vh'}} >
        < MultiChatSocket {...chatProps}/>
        < MultiChatWindow {...chatProps} style={{height:'100%'}} />

    </div>
    )
}

export default ChatsPage;




