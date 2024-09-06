import { BASE_URL } from "@/server/constants";
import { API_URL_ORDERS } from "@/server/api/orders";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page'), pageSize = searchParams.get('pageSize'), sort = searchParams.get('sort'), order = searchParams.get('order');

    try {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const url = `${BASE_URL}${API_URL_ORDERS}${page == null ? '' : `?page=${page}`}${pageSize == null ? '' : `&pageSize=${pageSize}`}${sort == null ? '' : `&sortField=${sort}`}${order == null ? '' : `&sortOrder=${order}`}`;

        const response = await fetch(url, {
            method: "GET",
            headers,
        });

        if (!response.ok) {
            return NextResponse.json({ message: 'Error fetching data from external API' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching data from external API' }, { status: 500 });
    }
}