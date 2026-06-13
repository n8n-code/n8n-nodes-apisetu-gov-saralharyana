import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovSaralharyanaApi implements ICredentialType {
        name = 'N8nDevApisetuGovSaralharyanaApi';

        displayName = 'Apisetu Gov Saralharyana API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovSaralharyana/apisetu-gov-saralharyana.svg', dark: 'file:../nodes/ApisetuGovSaralharyana/apisetu-gov-saralharyana.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/saralharyana/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/saralharyana/v3',
                        description: 'The base URL of your Apisetu Gov Saralharyana API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
