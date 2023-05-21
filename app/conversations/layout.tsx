import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import ConversationList from './components/ConversationList'
import getConversations from '../actions/getConversations'
import getUsers from '../actions/getUsers'

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const conversation = await getConversations()

  const users = await getUsers()

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversation} />
        {children}
      </div>
    </Sidebar>
  )
}
