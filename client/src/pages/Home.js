import SideMenu from "../components/SideMenu";
import TopMenu from "../components/TopMenu";
import Content from "../components/Content";

function Home() {
  return (
    <div class="flex flex-row h-screen">
      <SideMenu />
      <div class="w-full bg-blue-500 h-full flex flex-col">
        <TopMenu />
        <Content />
      </div>
    </div>
  );
}

export default Home;
