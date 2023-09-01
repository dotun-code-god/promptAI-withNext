import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import { cookies } from 'next/headers'

export async function GET () {
    const router = useRouter();
    // const cookieSection = cookies.


    const res = await fetch('', {
        headers: {

        }
    })

    const data = await res.json();

    return NextResponse.json(data)
}

export async function POST(request) {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');

    // return NextResponse.json({ name, email })
    return new Response("", {
        status: 200,
        headers: {
            'Access-Control-Origin' : ''
        }
    })
}

export async function POST(request) {
    const secret = request.nextUrl.searchParams.get('secret');
}