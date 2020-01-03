import connexion
import six

from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server import util


def get_auth_status():  # noqa: E501
    """Get authentication status

    Checks to see if there is currently an active authentication session. Returns the name of the current credentials if known.  # noqa: E501


    :rtype: InlineResponse200
    """
    return 'do some magic!'


def post_auth_login():  # noqa: E501
    """Submit authentication details

    TODO:  # noqa: E501


    :rtype: None
    """
    return 'do some magic!'
