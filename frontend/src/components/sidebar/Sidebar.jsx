import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import '../../components/media.css'

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col media-sidebar">
        <SearchInput />
        <div className="chat-white-divider"></div>
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default Sidebar