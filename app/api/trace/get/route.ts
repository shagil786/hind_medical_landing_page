import { BASE_URL } from "@/server/constants";
import { API_URL_TRACE } from "@/server/api/orders";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get('orderId');

    const url = `${BASE_URL}${API_URL_TRACE}/${orderId}`;
    try {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

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