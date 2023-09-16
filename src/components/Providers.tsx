"use client"

import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { QueryClient, QueryClientProvider} from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

const queryClient = new QueryClient()

function Providers({ children }: ThemeProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
      </NextThemesProvider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}

export default Providers