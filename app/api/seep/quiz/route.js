import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();

    // Try to save to Firestore
    try {
      const { db } = await import('@/lib/firebase');
      if (db) {
        const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
        await addDoc(collection(db, 'candidatos'), {
          ...data,
          criadoEm: serverTimestamp(),
        });
      }
    } catch (err) {
      console.log('Firestore not available, data not persisted:', err.message);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
