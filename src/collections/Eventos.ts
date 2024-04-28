import { CollectionConfig } from 'payload/types'

const Eventos: CollectionConfig = {
  slug: 'eventos',
  access: {
    // allow guest users to self-registration
    create: () => true,
    read:() => true,
    update:() => true,
    delete:() => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
        name: 'nameEvent',
        label: 'Nombre del evento',
        type: 'text', 
        required: true,
      },
      {
        name: 'backgroundImage', // required
        label: 'Subir imagen (1x1)',
        type: 'upload', // required
        relationTo: 'media', // required
        required: true,
      },
      {
        name: 'description',
        label: 'Sobre el evento',
        type: 'richText',
        required: true,
      },
      {
        name: 'dateOnly',
        label: 'Fecha',
        type: 'date',
        admin: {
          date: {
            pickerAppearance: 'dayOnly',
            displayFormat: 'd MMM yyy',
          },
        },
        required: true,
      },
      {
        name: 'timeOnly',
        label: 'Hora',
        type: 'date',
        admin: {
          date: {
            pickerAppearance: 'timeOnly',
            displayFormat: 'h:mm:ss a',
          },
        },
        required: true,
      },
      {
        name: 'duration',
        label: 'Duración del evento',
        type: 'text',
        required: true,
      },
      {
        name: 'address',
        label: 'Dirección',
        type: 'text',
        required: true,
      },
      {
        name: 'speakers',
        label: 'Presentadores',
        type: 'text',
        required: true,
      },
  ],
}

export default Eventos
