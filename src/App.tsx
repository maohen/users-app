import { lazy, Suspense } from "react";
import { UserProvider } from "./shared/context/UserContext";
import { Spinner } from "./shared/components";
import './styles/globals.scss'
import HomeLayout from "./shared/components/layouts/home/HomeLayout";

const UsersLazy = lazy(() => import('./shared/components/features/users/Users'));

function App() {
  return (
    <UserProvider>
      <Suspense fallback={<Spinner />}>
      <HomeLayout>
        <UsersLazy />
      </HomeLayout>
      </Suspense>
    </UserProvider>
  );
}

export default App;
