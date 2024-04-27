import { CollectionConfig } from 'payload/types'

const Eventos: CollectionConfig = {
  slug: 'eventos',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
        name: 'nameEvent',
        label: 'Nombre de evento',
        type: 'text', 
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
        label: 'duracion del evento',
        type: 'text',
        required: true,
      },
      {
        name: 'address',
        label: 'direccion',
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
