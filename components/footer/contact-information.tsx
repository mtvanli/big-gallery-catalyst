import { Fragment } from 'react';

import { getStoreSettings } from '~/client/queries/get-store-settings';

export const ContactInformation = async () => {
  const settings = await getStoreSettings();
  const contact = settings?.contact;

  if (!contact) {
    return null;
  }

  return (
    <>
      <address className="not-italic">
        {contact.address.split('\n').map((line) => (
          <Fragment key={line}>
            {line}
            <br />
          </Fragment>
        ))}
      </address>
      {contact.phone ? (
        <a
          className="hover:text-blue-primary focus:outline-none     "
          href={`tel:${contact.phone}`}
        >
          <p>{contact.phone}</p>
        </a>
      ) : null}
    </>
  );
};
