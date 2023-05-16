interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
      // <div className="mx-auto flex flex-col space-y-4">
      //   <header className="container sticky top-0 z-40 bg-white">
      //     <div className="h-16 border-b border-b-slate-200 py-4">
      //       <nav className="ml-4 pl-6">
      //         <a href="http://www.supahuman.xyz" className="hover:text-slate-600 cursor-pointer">
      //         <img src="supahumantext.png" width="180" height="80" alt="Home" />
      //         </a>
      //       </nav>
      //     </div>
      //   </header>
      //   <div>
      //     <main className="flex w-full flex-1 flex-col overflow-hidden">
      //       {children}
      //     </main>
      //   </div>
      // </div>
      <div className="mx-auto flex flex-col space-y-4">
  <header className="container sticky top-0 z-40 bg-white">
    <div className="h-16 border-b border-b-slate-200">
      <nav className="flex items-center ml-4 pl-6 h-full">
        <a href="http://www.supahuman.xyz" className="hover:text-slate-600 cursor-pointer">
        <img src="supahumantext.png" width="180" height="80" alt="Home" />
        </a>
      </nav>
    </div>
  </header>
  <div>
    <main className="flex w-full flex-1 flex-col overflow-hidden">
      {children}
    </main>
  </div>
</div>


  );
}
