import { useState } from "react";
import Story from "./Story"
import { useSession } from "next-auth/react"
import users from "../users"

function Stories() {

    const { data: session } = useSession()

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border roudned-sm
         overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
             {session && (
                 <Story 
                    img={session.user.image}
                    username={session.user.username}                   
                 />
             )}

            {users.map((profile) => (
                <Story
                    key={profile.id}
                    img={profile.avatar}
                    username={profile.username}
                />
            ))}
        </div>
    )
}

export default Stories
