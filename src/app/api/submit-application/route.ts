import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Préparer le contenu de l'email
    const emailContent = `
NOUVELLE CANDIDATURE - OFFRE SITE WEB GRATUIT
=============================================

COORDONNÉES
-----------
Nom: ${data.firstName} ${data.lastName}
Email: ${data.email}
Téléphone: ${data.phone || 'Non renseigné'}

PROJET
------
Type de site: ${data.siteType}
Nom du projet: ${data.projectName}
Secteur: ${data.sector}

Description:
${data.description}

BESOINS
-------
Fonctionnalités souhaitées: ${data.features.join(', ') || 'Aucune sélectionnée'}

Motivation:
${data.motivation}

Contenu prêt: ${data.hasContent}

DISPONIBILITÉ
-------------
Semaine préférée: ${data.preferredWeek}

=============================================
Candidature reçue le ${new Date().toLocaleString('fr-FR')}
    `.trim();

    // Utiliser l'API Web3Forms (gratuit, sans configuration)
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || '4e8f7c3d-9b2a-4f1e-8d6c-5a3b9c7e2f1d', // Clé temporaire - à remplacer
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: 'darellchooks@gmail.com',
        to_email: 'maqsoudt9@gmail.com',
        subject: `🎁 ${data.firstName} ${data.lastName} a postulé pour un site web gratuit`,
        message: emailContent,
        reply_to: data.email,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
