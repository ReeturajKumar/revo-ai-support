"use client";
import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <pre>{JSON.stringify(users, null, 2)}</pre>
          <Button onClick={() => addUser()}> Add</Button>
          <UserButton />
        </div>
      </Authenticated>
      <Unauthenticated>
        <div className="flex flex-col items-center justify-center min-h-svh gap-4">
          <div>Please sign in to view users</div>
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        </div>
      </Unauthenticated>
    </>
  );
}
