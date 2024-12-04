'use client';
import useSWR from "swr"

// function to fetch all contents: blogs, events, and case studies
const fetcher = (url) => fetch(url).then(res => res.json())

export function useContent(endpoint) {
    const { data, error, isLoading } = useSWR(
        `https://bw5bt69rjh.execute-api.af-south-1.amazonaws.com/prod/${endpoint}`,
        fetcher,
        {
            revalidateOnFocus: true,
            revalidateOnReconnect: true
        }
    )

    return {
        data: data?.data || data,
        isLoading,
        isError: error
    }
}
