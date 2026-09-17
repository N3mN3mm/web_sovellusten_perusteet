import React from 'react'

export default function DateNow() {
    const date = new Date();
    return (
    <div>Date: {date.toDateString()}</div>
  )
}
