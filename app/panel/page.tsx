import { redirect } from 'next/navigation';
  import { createClient } from '@/utils/supabase/server';
  
  import {   getUser } from '@/utils/supabase/queries';
  
  export default async function HomePage() {
      const supabase = createClient();
      const [user] = await Promise.all([
        getUser(supabase),
  
      ]);
    
      if (!user) {
        return redirect('/signin');
      }
    
  
      return (
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <section className="bg-black">
              <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
                Panel
                </h1>
              
              </div>
            </section>
            
         
       
          </main>
        </div>
      );
  }